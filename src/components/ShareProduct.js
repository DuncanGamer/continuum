import { BsFacebook, BsTwitter, BsWhatsapp } from "react-icons/bs"

import ShareItem from "./ShareItem"

const ShareProduct = ({ id }) => {
  const URL = `https://products/${id}`
  return (
    <div className="z-0 flex flex-col items-center">
      <p className="ms:text-xs md:text-lg text-white font-semibold mb-2">Share this concert</p>
      <div className="flex gap-2">
        <ShareItem
          icon={BsWhatsapp}
          url={`https://api.whatsapp.com/send?text=${URL}`}
        />
        <ShareItem
          icon={BsFacebook}
          url={`https://www.facebook.com/sharer/sharer.php?u=${URL}`}
        />
        <ShareItem
          icon={BsTwitter}
          url={`https://twitter.com/intent/tweet?text=WOW!!!&url=${URL}`}
        />
      </div>
    </div>
  )
}

export default ShareProduct