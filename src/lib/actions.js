"use server";

import { revalidatePath } from "next/cache";
import { signIn } from "./auth";
import { Post, User } from "./models";
import { connectToDb } from "./utils";

export const addPost = async (prevState,formData) => {

  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });

    await newPost.save();
    console.log("saved to db");
    revalidatePath("/blog");
    //revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};


export const deletePost = async (formData) => {
    const { id } = Object.fromEntries(formData);
  
    try {
      connectToDb();
  
      await Post.findByIdAndDelete(id);
      console.log("deleted from db");
      revalidatePath("/blog");
    } catch (err) {
      console.log(err);
      return { error: "Something went wrong!" };
    }
  };
  

  export const register = async (previousState, formData) => {
    const { username, email, password, img, passwordRepeat } =
      Object.fromEntries(formData);
  
    if (password !== passwordRepeat) {
      return { error: "Passwords do not match" };
    }
  
    try {
      connectToDb();
  
      const user = await User.findOne({ username });
  
      if (user) {
        return { error: "Username already exists" };
      }
  
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      const newUser = new User({
        username,
        email,
        password: hashedPassword,
        img,
      });
  
      await newUser.save();
      console.log("saved to db");
  
      return { success: true };
    } catch (err) {
      console.log(err);
      return { error: "Something went wrong!" };
    }
  };
  
  export const login = async (prevState, formData) => {
    const { username, password } = Object.fromEntries(formData);
  
    try {
      await signIn("credentials", { username, password });
    } catch (err) {
      console.log(err);
  
      if (err.message.includes("CredentialsSignin")) {
        return { error: "Invalid username or password" };
      }
      throw err;
    }
  };


  export const addGoogleUser = async (user) => {

   /* console.log("holii"+JSON.stringify(user));

    const { name, email, profilePicture } = user;*/


  
    try {

     const { user: { name, email, picture ,role } } = user;

     console.log("holii"+ name +" - "+ email + " - " + role);


      connectToDb();
  
      const userBD = await User.findOne({ email });
  
      if (userBD) {
        return { error: "Username already exists" };
      }
   /* } else {
        // Actualizar usuario si existe
        await usersCollection.updateOne(
          { email: profile.email },
          { $set: { name: profile.name, updatedAt: new Date() } }
        );
      }*/
      const newUser = new User({
        username: name,
        email: email,// Solo para usuarios locales
        img: picture,
        isAdmin: false,
        provider: 'google'
      });
  
      await newUser.save();
      console.log("saved to db");
  
      return { success: true };
    } catch (err) {
      console.log(err);
      return { error: "Something went wrong!" };
    }
  };
  
  