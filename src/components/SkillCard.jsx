
function SkillCard({title, yearsEs, yearsEn, stat, img, visible, current,language}) {
  return (
    <div className="flex flex-col py-4 my-5 bg-second rounded-md darkMode dark:bg-gray-600" >
        <div className="mx-auto">
            <img src={img} alt={title} className="w-[80px] h-[80px]"/>
        </div>
        <div className="py-2">
            <div className="paragraph">
            <p className="text-gradient font-extrabold">{title}</p>
            {/* <p>{language ? yearsEs : yearsEn}</p>
            <p>{stat} %</p> */}
            </div>
        </div>
    </div>
  )
}

export default SkillCard