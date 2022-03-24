import React from "react";
import "../Styles/StoryShowcase.css";
import Story from "../Components/Story";

function StoryShowcase() {
  return (
    <div className="storyShowcase">
      <Story
        image="https://i.imgur.com/CIkIxvz_d.webp?maxwidth=760&fidelity=grand"
        profileSrc="https://imgur.com/user/cyberavocado21/avatar"
        title="Avoca"
      />
      <Story
        image="https://i.imgur.com/xlmsGsx_d.webp?maxwidth=760&fidelity=grand"
        profileSrc="https://imgur.com/user/sravicorgibandit/avatar"
        title="Liffey"
      />
      <Story
        image="https://i.imgur.com/LftJnYc_d.webp?maxwidth=1520&fidelity=grand"
        profileSrc="https://imgur.com/user/thewholiganofgallifrey/avatar"
        title="Corrib"
      />
      <Story
        image="https://i.imgur.com/uKnMvyp_d.webp?maxwidth=760&fidelity=grand"
        profileSrc="https://imgur.com/user/coreunit/avatar"
        title="Blackwater"
      />
      <Story
        image="https://i.imgur.com/NE5Fs5k_d.webp?maxwidth=760&fidelity=grand"
        profileSrc="https://imgur.com/user/coronalmassejection/avatar"
        title="Lennon"
      />
    </div>
  );
}

export default StoryShowcase;
