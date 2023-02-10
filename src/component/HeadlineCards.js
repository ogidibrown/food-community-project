

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
        {/*card*/}
      <div className="rounded-xl relative">
        {/*overlay*/}
        <div className="absolute w-full h-full bg-black/40 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4">Sun's Out, Fufu's Out</p>
            <p className="px-2">Through 24/7</p>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4 ">Order Now</button>
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1543168691-518c24c546ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="/" />
      </div>  
      <div className="rounded-xl relative">
        {/*overlay*/}
        <div className="absolute w-full h-full bg-black/40 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4">African Restaurant</p>
            <p className="px-2">Chop and Die</p>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4 ">Order Now</button>
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1568600891621-50f697b9a1c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="/" />
      </div> 
      <div className="rounded-xl relative">
        {/*overlay*/}
        <div className="absolute w-full h-full bg-black/40 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4">Akrante3 Nkwan </p>
            <p className="px-2">3b3gye Wonsa</p>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4 ">Order Now</button>
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="/" />
      </div>     
    </div>
  )
}

export default HeadlineCards