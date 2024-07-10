import { useEffect } from "react";


function CopyNotif(props){
    useEffect(() => {
        // when the component is mounted, the alert is displayed for 3 seconds
        setTimeout(() => {
            props.copyMessageState(false);
            console.log("test")
        }, 1000);
      }, []);    
    return(<div className="hidden md-flex absolute translate-y-64">Color Copied!</div>)
}

export default CopyNotif