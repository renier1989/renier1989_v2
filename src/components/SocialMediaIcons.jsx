import { socialMediaIcons } from "../constants"

function SocialMediaIcons() {
  return (
    <div className="flex my-2 gap-6">
        {socialMediaIcons.map((icon) => (

            <a key={icon.id} href={icon.url} target="_blank"
            className={`${!icon.visible ? 'hidden' : ''} hover:opacity-50 transition duration-500`}
            >
                <img src={icon.img} alt={icon.name} className="w-7 invert " />
            </a>
        )
        )}
    </div>
  )
}

export default SocialMediaIcons