import React from 'react'

export default function About(props) {
  return (
    <div className={`text-${props.myMode==='light'?'dark':'light'}`}>
        <p>
        If, however, you're starting a friend group, desert island colony, or fan club from scratch and you get to pick the tools you use, this is what you should be looking for in messaging apps:

Availability on both iPhone and Android. And ideally on desktop too. We don't want any green bubble/blue bubble drama here. Text messaging should be about the person, not the device.

Privacy and security. Do you know who can read your SMS messages? Pretty much everyone. The best chat apps all have end-to-end encryption enabled by default, or at a stretch, allow you to quickly turn it on. There are a handful of circumstances where end-to-end encryption isn't appropriate, like with public group messaging and some kinds of business communications; but across the board, I favored services that cared about security and privacy.

No price tag. The best text apps are all free to use. Part of this is because most people aren't prepared to pay for them, but it's also because large corporations actually make surprisingly decent apps sometimes. It also helps that it's easier to convince your friends to sign up for a new service if they don't have to pay. 

Support for pictures, video, and other multimedia. Text messages are no longer 140 characters long (at least if you're not using SMS). They can be long essays, but also photos, GIFs, voice notes, YouTube links, documents, and lots of other forms of multimedia. If you want to send something over text message, you should be able to—at least as long as it's digital.

Support for group chat. A lot of text messaging doesn't happen one-to-one. For a free chat app to make this list, it had to be able to support group messaging. To be honest, this requirement didn't exclude many apps as it's a very common feature, but I still felt it needed to be stated.

Texting apps use an internet connection to send and receive messages. This is different from SMS, which uses your carrier's own protocols to send and receive messages anywhere with a cellular connection (even a weak one, with no data). While SMS messages cost money—either on a per-message basis or included with your cellular plan—the messages sent through data-only texting apps will all be free (even if the app itself is not).
        </p>
    </div>
  )
}
