// import Loading from '../Loading/Animation - 1698821532565.json'
import { useLottie } from "lottie-react";

const Loading = ({ animation }) => {
    const options = {
        animationData: animation.default,
        loop: true,
        autoplay: true,
    };
    
    const style = {
      height: 300,
    };

  const { View } = useLottie(options, style);

  return View;
};

export default Loading;
