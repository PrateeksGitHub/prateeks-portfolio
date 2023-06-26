import React from "react";
import JourneyPoint from "./JourneyPoint";

function JourneySection({ className }) {
  return (
    <section id="journey" className={`flex flex-col md:p-4 ${className}`}>
      <h1 className="flex heading-1 mb-16">My Journey</h1>
      <JourneyPoint
        duration="August 2021 - present"
        organisation="Skit.ai"
        title="Software Developer"
        smallBody="Lorem ipsum dolor sit amet consectetur. Feugiat elit consectetur scelerisque dui. Eu mollis quis purus eu condimentum lacinia pharetra feugiat vitae. Cum elementum aliquam sed amet mauris phasellus aliquam leo. Lectus fermentum sollicitudin eget amet. Mus tincidunt dolor blandit sem semper consequat urna. Malesuada arcu orci id faucibus metus placerat purus. Ipsum ac neque malesuada aliquet sed. Augue viverra senectus nunc. Feugiat elit consectetur scelerisque dui. Eu mollis quis purus eu condimentum lacinia pharetra feugiat vitae. Cum elementum aliquam sed amet mauris phasellus aliquam leo. Lectus fermentum sollicitudin eget amet. Mus tincidunt dolor blandit sem semper consequat urna. Malesuada arcu orci id faucibus metus placerat purus. Ipsum ac neque malesuada aliquet sed.Feugiat elit consectetur scelerisque dui. Eu mollis quis purus eu condimentum lacinia pharetra feugiat vitae. Cum elementum aliquam sed amet mauris phasellus aliquam leo. Lectus fermentum sollicitudin eget amet. Mus tincidunt dolor blandit sem semper consequat urna. Malesuada arcu orci id faucibus metus placerat purus. Ipsum ac neque malesuada aliquet sed. Cum elementum aliquam sed amet mauris phasellus aliquam leo. Lectus fermentum sollicitudin eget amet. Mus tincidunt dolor blandit sem semper consequat urna. Malesuada arcu orci id faucibus metus placerat purus. Ipsum ac neque malesuada aliquet sed. Cum elementum aliquam sed amet mauris phasellus aliquam leo. Lectus fermentum sollicitudin eget amet. Mus tincidunt dolor blandit sem semper consequat urna. Malesuada arcu orci id faucibus metus placerat purus. Ipsum ac neque malesuada aliquet sed."
      />
      <JourneyPoint
        duration="February 2021 - May 2021"
        organisation="Skit.ai"
        title="Software Developer"
        smallBody="Lorem ipsum dolor sit amet consectetur. Feugiat elit consectetur scelerisque dui. Eu mollis quis purus eu condimentum lacinia pharetra feugiat vitae. Cum elementum aliquam sed amet mauris phasellus aliquam leo. Lectus fermentum sollicitudin eget amet. Mus tincidunt dolor blandit sem semper consequat urna. Malesuada arcu orci id faucibus metus placerat purus. Ipsum ac neque malesuada aliquet sed. Augue viverra senectus nunc. Feugiat elit consectetur scelerisque dui. Eu mollis quis purus eu condimentum lacinia pharetra feugiat vitae. Cum elementum aliquam sed amet mauris phasellus aliquam leo. Lectus fermentum sollicitudin eget amet. Mus tincidunt dolor blandit sem semper consequat urna. Malesuada arcu orci id faucibus metus placerat purus. Ipsum ac neque malesuada aliquet sed.Feugiat elit consectetur scelerisque dui. Eu mollis quis purus eu condimentum lacinia pharetra feugiat vitae. Cum elementum aliquam sed amet mauris phasellus aliquam leo. Lectus fermentum sollicitudin eget amet. Mus tincidunt dolor blandit sem semper consequat urna. Malesuada arcu orci id faucibus metus placerat purus. Ipsum ac neque malesuada aliquet sed."
      />
    </section>
  );
}

export default JourneySection;
