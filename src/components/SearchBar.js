import React, { useRef, useState, useEffect } from 'react';
import BigButton from './BigButton';
import SLink from './Link';

function SearchBar() {
  let shortedObject = {};

  if (JSON.parse(localStorage.getItem('SHORTED_LINKS'))) {
    shortedObject = JSON.parse(localStorage.getItem('SHORTED_LINKS'));
  }

  const inputRef = useRef(null);
  const [shortLink, setShortLink] = useState(shortedObject);

  useEffect(() => {
    localStorage.setItem('SHORTED_LINKS', JSON.stringify(shortLink));
  }, [shortLink]);

  async function shorten(url) {
    let newLinks = [];
    if (url) {
      const response = await fetch(
        'https://api.shrtco.de/v2/shorten?url=' + url
      );
      const data = await response.json();
      Object.keys(shortLink).length > 0
        ? (newLinks = [data, ...shortLink])
        : (newLinks = [data]);
      setShortLink(newLinks);
    }
  }

  return (
    <section className=" bg-gray-100 relative mt-10">
      <div className="flex gap-4 z-60 flex-row justify-between items-center mx-20 p-16 bg-chdarkviolet rounded-2xl bg-shortenbg bg-cover my-8">
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
        {Object.keys(shortLink).length > 0
          ? shortLink.map((link, key) => (
              <SLink
                key={key}
                original={link.result.original_link}
                short={link.result.full_short_link2}
              ></SLink>
            ))
          : null}
      </div>
    </section>
  );
}

export default SearchBar;
