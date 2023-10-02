import "./style.css"

export default function Header() {
  return (
    <div className='flex content-center header'>
        <div className='headerItem'>Program Detail</div>
        <div className='headerItem selected'>Application Form</div>
        <div className='headerItem'>Workflow</div>
        <div className='headerItem enditem'>Preview</div>
    </div>
  )
}
