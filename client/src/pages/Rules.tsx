const Rules = () => {
  return (
    <div className="flex-1 md:min-h-[70vw] py-10 w-full flex flex-col items-center">
      <div className="w-3/4 space-y-6">
        <div>
          <span className="text-neutral-500 font-bold font-serif italic text-2xl ml-1">
            REGULAMIN
          </span>
          <hr className="border-neutral-500 w-3/4" />
        </div>
        <ul className="list-decimal list-inside text-neutral-500 font-sans text-md leading-7">
          <li>
            Użytkownik jest zobowiązany do korzystania ze strony w sposób zgodny
            z obowiązującym prawem.
          </li>
          <li>
            Zakazane jest publikowanie treści pornograficznych lub naruszających
            dobro osób trzecich.
          </li>
          <li>
            Kliknięcie przycisku "Akceptuj" jest równoznaczne z akceptacją
            regulaminu.
          </li>
          <li>
            Administrator ma prawo do usunięcia treści niezgodnych z regulaminem
            oraz usunięcia kont użytkowników łamiących zasady.
          </li>
        </ul>
      </div>
      <span className="text-neutral-500 w-3/4 mt-14 text-center">
        Weź nie rób syfu i bedzie git xd.
      </span>
    </div>
  );
};

export default Rules;
