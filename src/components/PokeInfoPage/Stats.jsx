import '../../styles/Stats.css'

const Stats = ({ sta }) => {
    const porcent = sta.base_stat /1.5

  return (
    <li className='stats__li'>
        <div className='stats__div'>
            <span className='stats__name'>{sta.stat.name}:</span>
            <span className='stats__stat'>{sta.base_stat}/150</span>
        </div>
        <div className='divdiv__porcent'>
        <div className='div__porcent' style={{width: Number(porcent) + "%"}}></div>
        </div>
        
    </li>
  )
}

export default Stats