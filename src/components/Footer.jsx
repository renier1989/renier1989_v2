import { icon2w} from "../assets";
import SocialMediaIcons from './SocialMediaIcons';

function Footer({language}) {
  return (
    <section className="">
      <div className='flex flex-row justify-center items-center space-x-5'>
        <img src={icon2w} alt="logo" className="w-[50px]"/>
        <div className="flex flex-col justify-center items-center">
            {language ? (
              <p>
              Diseñado y construido por Renier Vargas.
              </p>
            ) : (
              <p>
              Designed & Built by Renier Vargas.
              </p>
            )}
            <SocialMediaIcons />
        </div>
      </div>
    </section>
  )
}

export default Footer