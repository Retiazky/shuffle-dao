# ShuffleDAO

Your favourite dance studio, now comunity-powered.

## The problem it solves

@lucyklus is amazing dancer and she loves to dance shuffle. She is always looking for new ways to improve her skills, learn new moves, and connect with other dancers. However, she often knows that building a community is hard and she is looking for a way to connect with a people that are attending her courses.

Therefore she came with an amazing idea to make a DAO that will help her to connect with her students and lectors. By having a membership in the DAO, people have a chance to vote on the topics that they want to learn, they can propose new lectors and they can even propose a modification of the lesson.

Do you want to dance Macarena instead of techno? No problem, just propose it and let the community vote on it. 
You wanna have a Friday lesson with Lucy instead of other instructor? No problemo <3

And the best part? You can earn a badge for attending the lessons and participating in the shuffle dance competitions.

The cutest bonus is that we offer a generative NFT avatar that evolves with your participation and dance progress. (each avatar is unique). This way you can show off your dance skills and your commitment to the community.

## Challenges we ran into

It was our first time building a DAO so we had to learn a lot about how Governance contracts work.
Because of EIP-170 we had obstacles to build and deploy the contracts on the BASE blockchain (optimizations helped).
Third obstacle was an architecture of the project regarding to permisions - can we allow everyone to propose a new lesson? How to prevent spam? How to prevent a situation when someone will propose a lesson that is not related to shuffle dance?

Additionally we are using Nuxt and there are not many libraries/ examples that can be used.

## Technologies we used

Solidity, Forge, Nuxt, viem, SubSquid, TypeScript, IPFS, OpenZeppelin

## Links

- [Lucyklus on Instagram](https://www.instagram.com/lucyklus/)
- [github](https://github.com/Retiazky/shuffle-dao)


## What is ShuffleDAO?

Dancing shuffle is amazing, but dancing shuffle with friends is amazinger (jk/ we know).
ShuffleDAO is a decentralized autonomous organization (DAO) focused on promoting and supporting the shuffle dance community. Our mission is to foster growth, collaboration, and innovation within the global shuffle dance scene.


## Is this project a public good?

ShuffleDAO is a community-driven initiative that aims to promote and support the shuffle dance community. Ideas however are universal are not limited to shuffle dance only, but can be applied to any community that wants to build a community-driven tribes. By applying the principles of game theory, people are incentivized to participate in the DAO, contribute to its growth, and engage with the community in a meaningful way. This creates a positive feedback loop that benefits all members and strengthens the bonds between them.

## The easter egg

One of the amazing features of our project is the generative NFT avatar that evolves with your participation and dance progress. Each avatar is unique and reflects the user's dance skills and commitment to the community. This feature not only adds a fun and creative element to the project but also incentivizes users to engage with the community and showcase their progress through their avatar. By integrating art and creativity into the project, we aim to enhance the user experience and foster a sense of identity and belonging within the ShuffleDAO community.


## Our Goals

ShuffleDAO aims to achieve the following objectives:

1. **Community Building**: We strive to bring together shuffle dancers from around the world, facilitating connections, collaborations, and the exchange of knowledge and skills.

2. **Event Organization**: ShuffleDAO organizes and supports shuffle dance events, competitions, workshops, and meetups, providing a platform for dancers to showcase their talents and learn from each other.

3. **Education and Resources**: We offer educational resources, tutorials, and mentorship programs to help both newcomers and experienced dancers improve their skills and stay up-to-date with the latest trends and techniques.

4. **Funding and Sponsorship**: Through our decentralized governance model, ShuffleDAO provides funding and sponsorship opportunities for shuffle dance projects, events, and initiatives that align with our mission.

5. **Advocacy and Promotion**: We advocate for the recognition and promotion of shuffle dance as a legitimate art form, fostering greater appreciation and understanding within mainstream culture.

## How it Works

ShuffleDAO operates on a decentralized governance model, where members can propose and vote on initiatives, projects, and funding allocations. Decisions are made transparently through secure on-chain voting mechanisms, ensuring fair representation and participation from the entire community.

To become a member of ShuffleDAO, individuals can purchase and hold our native governance token, `$SHUFF`. Token holders can participate in the decision-making process, submit proposals, and contribute to the growth and direction of the organization.

By attending the events, participating in the workshops, and engaging with the community, members can earn **badges** in form of semi-fungible token along with a small portion of the `$SHUFF` token that enhance their voting power and influence within the DAO.

## Architecture

The heart of the ShuffleDAO is the smart contract `ShuffleGovernor` that manages the governance process. The contract is deployed on the BASE blockchain and interacts with the `$SHUFF` token contract, allowing token holders to vote on proposals, delegate voting power, and participate in the DAO's decision-making process.

Logic for handling shuffle lessons, lectors are written in `ShuffleDAO`

## Get Involved

If you're passionate about shuffle dance and want to be part of a vibrant, decentralized community, join ShuffleDAO today. [Visit our website (Placeholder)](https://fiit.stuba.sk) to learn more about how to become a member, participate in upcoming events, and contribute to our mission.

Together, we can shape the future of shuffle dance and foster a thriving global community.

## FAQ

1. What is Shuffle Dance?

Shuffle dance is a style of street dance that originated in the 1980s and gained popularity in the underground club scene. It involves a unique footwork pattern that creates a distinctive "shuffling" motion, often performed to electronic music genres like house, techno, and drum and bass.