
function SkillCard({title, years, stat, img, visible, current}) {
  return (
    <div className="flex flex-col  py-4  my-5 bg-fuchsia-300 rounded-[30px]" >
        <div className="mx-auto">
            <img src={img} alt={title} className="w-[80px] h-[80px]"/>
        </div>
        <div className="py-2">
            <div className="paragraph">
            <p>{title}</p>
            <p>{years}</p>
            <p>{stat} %</p>
            </div>
        </div>
    </div>
  )
}

export default SkillCard