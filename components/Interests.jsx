import Link from "next/link";

const Interests = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h3 className="text-center font-semibold text-2xl lg:text-4xl pt-12">
        Passion and Interests
      </h3>
      <div className="grid place-items-center gap-4 grid-cols-12 mt-8 font-light">
        <div className="col-span-12 lg:col-span-7">
          <h5 className="text-center font-medium lg:text-xl py-2 mb-2">
            My World Outside of Software Development
          </h5>
          <p>
            While I'm deeply passionate about crafting innovative software
            solutions, my world extends far beyond the digital realm. Here are a
            few of my interests that fuel my creativity and keep me grounded:
          </p>
          <ul className="mt-4">
            <li className="mb-2">
              <strong className="font-medium">Art:</strong> I have a deep
              appreciation for art in all its forms. From paintings and
              sculptures to photography and even fashion. Art has the power to
              evoke emotions and enrich our lives.
            </li>
            <li className="mb-2">
              <strong className="font-medium">Music:</strong> To put it simply,
              I love music. I live for it. Just like any other art form, good
              music evokes emotions and emotions make the life experience more
              beautiful. Check out some of my favourite curated Spotify {" "}
              <Link href="/#playlists">
                <span className="!text-amber-600 cursor-pointer font-medium">playlists</span>
              </Link>
              .
            </li>
            <li className="mb-2">
              <strong className="font-medium">Sports:</strong> Football in
              particular. I was born a Liverpool fan and I intend to die that
              way. I also love tennis, badmington. I wouldn't say I love
              basketball, I just love watching Steph play.
            </li>
            <li className="mb-2">
              <strong className="font-medium">Anime:</strong> I'm a fan of the
              new generation of anime. JJK, AOT, Demon Slayer, Vinland Saga,
              etc. Expect to hear more about anime from me in the near future...
              Hopefully 🙂‍↕️
            </li>
            <li className="mb-2">
              <strong className="font-medium">Gaming:</strong> Gaming serves as
              a great way for me to relax and unwind. While I'm not a hardcore
              competitive gamer, I enjoy the immersive experiences it offers.
            </li>
            <li className="mb-2">
              <strong className="font-medium">Adventures:</strong> So typically,
              I love staying indoors, but nature has a calming effect on me. I
              love hiking, camping, exploring new destinations and taking late night
              walks/drive.
            </li>
          </ul>
        </div>
        <img
          src="https://res.cloudinary.com/emino/image/upload/v1724607548/emino/nike_art.jpg"
          className="col-span-12 lg:col-span-5 rounded-md order-first md:order-last"
        />
        {/* <img
          src="https://res.cloudinary.com/emino/image/upload/v1724607548/emino/nike_art_2.jpg"
          className="col-span-12 lg:col-span-5 rounded-md order-first md:order-last"
        /> */}
      </div>
    </section>
  );
};

export default Interests;
