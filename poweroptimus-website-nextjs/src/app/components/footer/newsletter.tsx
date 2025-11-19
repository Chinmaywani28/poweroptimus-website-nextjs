import { useState } from 'react';
import './newsletter.css';

export const NewsLetter = () => {

  const [email, setEmail] = useState<string>("");
  

  const subscribeNow = async () => {
    // const id = toast.loading(t("messages.pleaseWait"));

    // if (!email || !isValidEmail(email)) {
    //   toast.update(id, { render: t("messages.provideValidEmail"), type: "warning", isLoading: false, autoClose: 3000 });
    //   return;
    // }

    // const subscribers = await getActiveSubscribersByEmail(email);
    // if (!subscribers.empty) {
    //   toast.update(id, { render: t("messages.youHaveAlreadySubscribed"), type: "warning", isLoading: false, autoClose: 3000 });
    //   return;
    // }

    // await addSubcriber(email);
    // toast.update(id, { render: t("messages.subscribedToNewsletter"), type: "success", isLoading: false, autoClose: 3000 });
    // setEmail("");
  }

  return (
    
    <div>
      <div className="newsletter-title Header1ABold">Newsletter</div>
          <div className="newsletter-text footerAddress body4">
            Subscribe to our newsletters to receive latest news and updates
          </div>
          <input
            type="email"
            className="newsletter-input"
            placeholder="Enter your Email"
          />
          <button className="newsletter-button">Subscribe Now</button>
    </div>



  );
};

