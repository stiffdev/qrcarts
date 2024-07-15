import mongoose from "mongoose";

/*const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50,
    },
    password: {
      type: String,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);*/

const userSchema = new mongoose.Schema(
    {
      username: {
        type: String,
        required: true,
        min: 3,
        max: 30,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        max: 60,
      },
      password: {
        type: String,
        // Establecer validación personalizada para asegurar que no sea null si se proporciona
        validate: {
          validator: function(v) {
            // Verificar que no sea null solo si se proporciona
            return v !== null || this.provider !== 'google'; // 'google' sería el proveedor OAuth
          },
          message: 'Password cannot be null for local users',
        },
      },
      img: {
        type: String,
      },
      isAdmin: {
        type: Boolean,
        default: false,
      },
      provider: {
        type: String,
        enum: ['local', 'google'], // Ejemplo de proveedores admitidos
        required: true,
      }
    },
    { timestamps: true }
  );
  

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    userId: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const restaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
      min: 3,
      max: 30,
    },
    ownerEmail: {
      type: String,
      required: true,
      min: 3,
      max: 30,
    },
    email: {
      type: String,
      required: true,
      min: 3,
      max: 30,
    },
    insta: {
      type: String,
      required: true,
      min: 3,
      max: 30,
    },
    web: {
      type: String,
      required: false,
      unique: false,
      max: 60,
    },
    description: {
      type: String,
      required: false,
      unique: false,
      max: 300,
    },
    city: {
      type: String,
      required: false,
      unique: false,
      max: 60,
    },
    address: {
      type: String,
      required: false,
      unique: true,
      max: 100,
    },
    img: {
      type: String,
      required: false,
    },
    tlf: {
      type: Number,
      required: false,
      unique: true,
      max: 60, 
      validate: {
        validator: Number.isInteger,
        message: '{VALUE} no es un número entero'
      }
    }
  },
  { timestamps: true }
);
/* {
  _id: ObjectId("unique_id"),
  nombre: "Nombre del restaurante",
  web: "https://ejemplo.com",
  instagram: "@instagram_handle",
  ciudad: "Ciudad",
  ubicacion: "Dirección física del restaurante",
  mapsUrl: "URL de Google Maps",
  telefono: "+123456789",
  imagenUrl: "https://ruta.a.tu/imagen.jpg" // URL pública de la imagen en Amazon S3, GCS, o Azure Blob Storage
}
 */

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
export const Post = mongoose.models?.Post || mongoose.model("Post", postSchema);
export const Restaurant = mongoose.models?.Restaurant || mongoose.model("Restaurant", restaurantSchema);