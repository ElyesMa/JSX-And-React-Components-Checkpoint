import MyPhoto from "../../Photo.png"
import Eye from "../../eyes.jpg"
function ProfilePhoto() {
    return (      
        <div className="move-area">
        <div className='.container'>
          <img className='eye eye1 ' src={Eye} alt ='MyPhoto' />
          <img className='eye eye2 ' src={Eye} alt ='MyPhoto' /> 
          <img style={{position: "absolute", top:"-15vh" , left:"31vw" ,height:500}} src={MyPhoto} alt ='MyPhoto'/>
        </div>
      </div>
    
        );
  }
  
  export default ProfilePhoto;