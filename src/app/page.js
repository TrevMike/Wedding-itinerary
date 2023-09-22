const Itinerary = [
  { time: "3:00 pm", event: "Chapter 1 - Once Upon A Beginning Ceremony..." },
  { time: "4:00 pm", event: "Chapter 2 - Ceremony Ends..." },
  { time: "5:00 pm", event: "Chapter 3 - Cocktail Hour Begins..." },
  {
    time: "6:00 pm",
    event:
      "Chapter 4 - Guest Arrive at Reception Venue & Cocktail Hour Ends...",
  },
  { time: "6:45pm", event: "Chapter 5 - Dinner Begins" },
  { time: "8:00 pm", event: "Chapter 6 - Buddy Bar Opens..." },
  {
    time: "8:15pm",
    event:
      "Chapter 7 - Speeches Begin from Honored Guest ending with a toast...",
  },
  { time: "8:30pm", event: "Chapter 8 - Dance Starts..." },
  { time: "9:30pm", event: "Chapter 9 - Cutting Cake..." },
  { time: "10:45pm", event: "Chapter 10 - The End... of The Wedding..." },
  { time: "11:00pm", event: "Bonus Chapter - Happily Ever After... PARTY!?!" },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between   lg:p-24 p-10  bg-orange-100 w-full">
      <div className=" sm:w-full lg:w-3/5 bg-orange-200 lg:py-4 lg:pb-8 pb-8  rounded-lg">
        <header>
          <h1 className="w-full text-center py-4 lg:text-5xl text-3xl font-bold">
            Alex & Hailey&apos;s Wedding Itinerary
          </h1>
        </header>
        <div className="mx-4 lg:text-2xl text-xl font-medium">
          <div className="pb-2"> Dear cherished friends and family,</div>
          <div className="pb-2">
            As we gather here today to celebrate love and unity, I want to
            express my deepest gratitude for each and every one of you. Your
            presence here fills our hearts with joy beyond measure. Please enjoy
            this beautiful day, dance like nobody&apos;s watching, and savor
            every moment. Most importantly, stay safe and take care of one
            another. Our love for you knows no bounds, and we&apos;re incredibly
            thankful to have you in our lives. Here&apos;s to a day filled with
            love, laughter, and cherished memories.
          </div>

          <div>
            With all our love, <br /> Alex & Hailey
          </div>
        </div>
        <section>
          <div className="w-full text-center font-bold lg:text-4xl text-2xl pb-6 ">
            ~ Itinerary ~
          </div>
          <ul>
            {Itinerary.map((item, index) => {
              return (
                <li
                  key={index}
                  className="flex items-center justify-between py-4 mx-4 border-b-2 border-black lg:text-2xl text-xl font-semibold"
                >
                  <div className="w-1/3">{item.time}</div>
                  <div className="w-2/3">{item.event}</div>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </main>
  );
}
