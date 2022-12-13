import React, { useEffect, useState } from "react";

const ClassForm = ({ user }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [batch, setBatch] = useState("6 am-7 am");
  const [payment, setPayment] = useState(false);
  const [alreadyEnrolled, setAlreadyEnrolled] = useState(false);
  const [passDate, setPassDate] = useState();
  const [validUpto, setValidUpto] = useState("");

  const [email, setEmail] = useState();
  useEffect(() => {
    if (user != null) {
      setEmail(user.email);
    }
  }, [user]);

  useEffect(() => {
    let today = new Date();
    
    if(passDate!=undefined){
      console.log(passDate.getTime() > today.getTime());
      setAlreadyEnrolled(true);
      setValidUpto(passDate.toDateString());
    }
    
  },[passDate]);
  
  const fetchMyPass = async() => {
    let res = await fetch("http://localhost:3000/api/mypass", {
      method: "POST",   
      body: JSON.stringify({
        email: user.email,
      }),
    });
    let result = await res.json();
    let validUpto = new Date(result.data[0].validUpto);
    setPassDate(validUpto);
    
  }
  
  useEffect(() => {
    try {
      if(user!=null){

        fetchMyPass();
      }
    }catch(e) {
      console.log(e);
    }
  },[user]);
  const today = new Date();

  let submitForm = async (e) => {
    e.preventDefault();
    const validUpto = new Date();
    validUpto.setDate(today.getDate() + 30);
    // console.log({ email, name, age, batch, validUpto });
    setAlreadyEnrolled(true);

    let res = await fetch("http://localhost:3000/api/pass", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        age: age,
        batch: batch,
        validUpto: validUpto,
      }),
    });
    
    res = await res.json();
    setAllPasses([...allPasses, res]);
    setName("");
    setAge();
    setBatch("5a.m-6a.m");
    
  };

  let goToPayment = async (e) => {
    e.preventDefault();
    setPayment(true);
  };

  return (
    <div className={`flex w-full ${alreadyEnrolled ? "justify-center space-x-3" : " items-center "} p-6 rounded-lg shadow-lg bg-white `}>
      { (user && (alreadyEnrolled)) ?
        <div className="flex flex-col shadow-inner w-full p-4 justify-start items-center">
          <p className="uppercase rounded-full bg-orange-600 shadow-md text-white font-bold truncate w-1 px-4 flex justify-center py-1">{user.displayName[0]}</p>
          <p className="font-medium text-2xl m-2 ">{user.displayName}</p>
          <p className="font-semibold text-gray-400">Entry till</p>
          <p className="font-semibold " >{validUpto}</p>
        </div>
      : <form className="w-full" onSubmit={submitForm} method="post">
        {payment ? (
          <div>
            <div className="form-group mb-6">
              <label className="form-label inline-block mb-2 text-gray-700">
                Card Number
              </label>
              <input
                type="number"
                onChange={(e) => setName(e.target.value)}
                className="form-control
        block
        w-full
        px-3
        py-1.5
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Your Debit/Credit Card Number"
              />
            </div>
            <div className="form-group mb-6">
              <label className="form-label inline-block mb-2 text-gray-700">
                CVV
              </label>
              <input
                type="number"
                onChange={(e) => setAge(e.target.value)}
                min="18"
                max="65"
                className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInputPassword1"
                placeholder="Your Card CVV"
              />
            </div>
            <div className="form-group mb-6">
              <label className="form-label inline-block mb-2 text-gray-700">
                Valid Upto
              </label>
              <input className="px-2 py-1  rounded-md mx-2 shadow-sm" type="date" />
            </div>

            <button
          type='submit'
          className="
      px-6
      py-2.5
      w-full
      bg-green-600
      text-white
      font-medium
      text-xs
      uppercase
      rounded
      shadow-md
      hover:bg-green-700 hover:shadow-lg
      focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-green-800 active:shadow-lg"
        >
          Ready For Classes
        </button>
          </div>
        ) : (
          <div>
            <div className="form-group mb-6">
              <label className="form-label inline-block mb-2 text-gray-700">
                Name
              </label>
              <input
                type="name"
                onChange={(e) => setName(e.target.value)}
                className="form-control
        block
        w-full
        px-3
        py-1.5
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Your Name"
              />
            </div>
            <div className="form-group mb-6">
              <label className="form-label inline-block mb-2 text-gray-700">
                Age
              </label>
              <input
                type="number"
                onChange={(e) => setAge(e.target.value)}
                min="18"
                max="65"
                className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInputPassword1"
                placeholder="Your Age"
              />
            </div>
            <div className="form-group mb-6">
              <label className="form-label inline-block mb-2 text-gray-700">
                Batch
              </label>
              <select
                onChange={(e) => setBatch(e.target.value)}
                className="form-control
        block
        uppercase
        w-full
        px-3
        py-1.5
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Your Name"
              >
                <option value="6 am-7 am">6 am-7 am</option>
                <option value="7 am-8 am">7 am-8 am</option>
                <option value="8 am-9 am">8 am-9 am</option>
                <option value="5 pm-6 pm">5 pm-6 pm</option>
              </select>

            </div>
              <button
          onClick={goToPayment}
          className="
      px-6
      py-2.5
      w-full
      bg-orange-600
      text-white
      font-medium
      text-xs
      uppercase
      rounded
      shadow-md
      hover:bg-orange-700 hover:shadow-lg
      focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-orange-800 active:shadow-lg"
        >
          Go to Payment
        </button>
          </div>
        )}

      </form>}
    </div>
  );
};

export default ClassForm;
