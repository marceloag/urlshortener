import React, { useRef, useState, useEffect } from 'react';
import BigButton from './BigButton';
import SLink from './Link';

function SearchBar() {
  const inputRef = useRef(null);
  const [shortLink, setShortLink] = useState(
    JSON.parse(localStorage.getItem('SHORTED_LINKS'))
  );

  useEffect(() => {
    localStorage.setItem('SHORTED_LINKS', JSON.stringify(shortLink));
  }, [shortLink]);

  async function shorten(url) {
    if (url) {
      const response = await fetch(
        'https://api.shrtco.de/v2/shorten?url=' + url
      );
      const data = await response.json();
      const newLinks = [data, ...shortLink];
      setShortLink(newLinks);
    }
  }

  return (
    <section className=" bg-gray-100 relative mt-10">
      <div className="flex gap-4 z-60 flex-row justify-between items-center mx-20 p-16 bg-chdarkviolet rounded-2xl bg-shortenbg bg-cover">
        <input
          ref={inputRef}
          type="text"
          placeholder="Shorten a link here..."
          className="w-full px-10 py-5 rounded-lg text-lg text-chgray"
        />
        <BigButton
          title="Shorten It!"
          onClick={() => shorten(inputRef.current.value)}
        />
      </div>
      <div>
        {shortLink.map((link, key) => (
          <SLink
            key={key}
            original={link.result.original_link}
            short={link.result.full_short_link2}
          ></SLink>
        ))}
      </div>
    </section>
  );
}

export default SearchBar;
