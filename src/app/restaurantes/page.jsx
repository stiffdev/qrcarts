
const RestaurantesPage = () => {
  // const a = Math.random();

  // console.log(a);

  return (
    <div >
      <div >
      <h1>Member Server Session</h1>
       
      </div>
      <div >
        {/* <HydrationTestNoSSR/> */}
        {/* <div suppressHydrationWarning>{a}</div> */}
        <form action="" >
          <input type="text" placeholder="Name or company" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default RestaurantesPage;