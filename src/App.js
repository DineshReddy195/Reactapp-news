import logo from './logo.svg';
import './App.css';

const Card=({profilepic,profilename,heading,news,date,time,type,image})=>{
  return(
    <div className='Card'>
      <div className='News'>
        <div className='content'>
          <div className='profile'>
          <section className='profile-pic'>
            <img src={profilepic} alt='profile-pic' className='image'/>
            </section>
          <section className='profile-name'>
          <h4>{profilename}</h4>
          </section>
          </div>
          <div className='info'>
            <section className='heading'>
              <h3>{heading}</h3>
              <p className='para'>{news}</p>
            </section>
          </div>
          <div className='footer'>
            <section className='date'>{date}</section>
            <section className='time'>{time}</section>
            <section className='type'>{type}</section>
            <section className='icon'><span class="material-symbols-outlined">bookmark_add</span></section>
          </div>
        </div>
        <div className='picture'>
          <img src={image} alt='web3 image' className='pic'/>
        </div>
      </div>
      </div>
  )
}

function News() {
  return(
    <div>
      <Card profilepic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz1rLseZTJ6YRzvVJvjULknsz76zHB6as7eA&usqp=CAU' profilename="Eric Feng" heading="Why are there so many Web3 startups?" news='This week, Pitchbook published their latest Emerging Tech Indicator(ETI) report which tracks early stage investment activity....' date="Dec 4 ."time="6 min read ." type="Web3" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPCZvZlcyr0D9qEZO-1QaSG6Wz6scrQD050Q&usqp=CAU" icon="bookmark_add"/>

      <Card profilepic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7aUL6OxehOuaSPlwevGV2k7s0a17SXRVU2w&usqp=CAU" profilename="Chasten Buttigieg" heading="What Marriage Means To Me" news="After dropping the kids off, I came home and stopped in the kitchen to take in the aftermath of our chaotic morning together...." date="Nov 29." time="3 min read." type="Parenting" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlnykIiXffhBKlBmDo5-mVHK8L5p4f-fl0eQ&usqp=CAU"/>

      <Card profilepic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE8Eblqq8pl9T7wxPMMwgDD_LQHotYGhmTZA&usqp=CAU" profilename="Nicholas Moryl" heading="Leaving San Francisco" news="to make the form, nature, content, future course, etc., of (something) different from what it is or from what it would be if left alone: to change one's name;to ..." date="Nov 23." time="8 min read." type="Change" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnbFAGAPyoTTvMYEs9tfdFvyOaDr4bufhQ7w&usqp=CAU"/>
    </div>
  )
}

export default News;