export default function Hero() {
  return (
    <div className="">
      <div className="flex gap-3">
        <div>
          <h1 className="text-3xl font-bold">Hi, I'm Michael 👋</h1>
          <p className="mt-2">
            A marketer turned web developer. I love building things and helping
            people. Currently building on the blockchain
          </p>
        </div>
        <img
          src="/images/michael.png"
          alt="Michael"
          className="w-36 h-36 bg-black rounded-full border-2 border-black"
        />
      </div>
    </div>
  );
}
