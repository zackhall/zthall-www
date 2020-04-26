import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';

import CopyButton from '../components/copyButton';
import Layout from '../components/layout';
import SEO from '../components/seo';

const ContactPage = ({ data, location }) => {
  const { alexa, amazon, lodashPage, lodashSignature } = data;

  const header = (
    <header className="container px-4 mt-8">
      <div className="z-border-b-dashed">
        <h1>Say hello</h1>
      </div>
    </header>
  );

  return (
    <Layout location={location} header={header}>
      <SEO title="About & Contact" />
      <div className="flex flex-col lg:flex-row">
        <div className="max-w-2xl pr-6">
          <p>
            Alright, you're here. My information's right there. But you haven't
            contacted me yet. What're you waiting for?{' '}
          </p>
          <p>
            Alright, I get it. There's a lot of engineers and you need me to
            prove that I can sling some code. I hate to be{' '}
            <strong>
              <i>that guy</i>
            </strong>
            . I don't like giving the hard sell. It's not my style, I'm
            typically more laid back. But here's a few things that I'm proud of.
          </p>
          <p>
            You ever heard of the site{' '}
            <a href="https://amazon.com">Amazon.com</a>? Don't lie. I know you
            have. And if so, you've certainly been using my code. I helped build
            the navigation bar at the top of every page. And when I was on that
            team in 2016, the A/B tests we ran resulted an increase in revenue
            of more than $600M <i>per year</i>. Not bad, am I right?
          </p>
          <Image
            className="max-w-full mb-6"
            fluid={amazon.childImageSharp.fluid}
          />
          <p>
            And you know that talking cylinder that you keep in your house?
            Yeah, she goes by Alexa usually. Ever asked her for the{' '}
            <a href="https://developer.amazon.com/en-US/docs/alexa/flashbriefing/understand-the-flash-briefing-skill-api.html">
              news
            </a>
            ? That's running my code too. I taught Alexa many talents. I taught
            her to recognize the names of your favorite news channels (For
            example, <i>“Alexa, play news from CNN”</i> instead of the generic{' '}
            <i>“Alexa, play news”</i>). I taught her to play videos. I even
            taught her to play the news in India, Japan, Australia, New Zealand,
            Ireland, and Canada.
          </p>
          <Image
            className="max-w-full mb-6"
            fluid={alexa.childImageSharp.fluid}
          />
          <p>
            And if you're a front-end engineer, you might've heard of the Lodash
            utility library. The one that has more than 28 million weekly
            downloads. Yeah, that one. They trusted me to bring their new
            <a href="https://lodash.com">documentation website</a> to life using
            React, Jekyll and Github Pages.
          </p>
          <Image
            className="max-w-full mb-6"
            fluid={lodashPage.childImageSharp.fluid}
          />
          <p>
            They're still sporting my little signature at the bottom to this
            day. ❤ you too Lodash.
          </p>
          <Image
            className="block! max-w-full mb-6 mx-auto"
            fixed={lodashSignature.childImageSharp.fixed}
          />
          <p>
            Those are some big names that put a lot of trust in me. Don't ya
            think?
          </p>
          <p>
            But if I'm honest, I'm most proud of this one because of how much it
            impacted a cherished local business. I designed and built a new
            website for a local Seattle CrossFit gym. And here's what the owner
            had to say about the work [
            <a href="https://www.facebook.com/davidisrael/posts/10159895346895265:0">
              source
            </a>
            ]:
          </p>
          <blockquote>
            Before we launched ... we were receiving about 10 new members a
            month at most. And 2 months after we launched our new site, our
            numbers had more than doubled. That math is undeniable.
          </blockquote>
          <p>
            So no matter what kind of project you have in mind, go ahead and
            reach out.
          </p>
        </div>
        <div className="flex-grow order-first lg:order-none z-border-b-dashed lg:border-0 lg:px-6 mb-10">
          <h3 className="block font-bold text-base">Contact info</h3>
          <p>
            Email:
            <br />
            <CopyButton text="zack@zthall.com" />
          </p>
          <p>
            <span>Twitter:</span>&nbsp;
            <small>
              <a href="https://twitter.com/zthall" className="z-underline">
                @zthall
              </a>
            </small>
          </p>
          <p>
            <span>Github:</span>&nbsp;
            <small>
              <a href="https://github.com/zackhall" className="z-underline">
                @zackhall
              </a>
            </small>
          </p>
          <p>
            <span>LinkedIn:</span>&nbsp;
            <small>
              <a
                href="https://www.linkedin.com/in/hallzack/"
                className="z-underline"
              >
                /in/hallzack
              </a>
            </small>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;

export const pageQuery = graphql`
  query {
    lodashPage: file(absolutePath: { regex: "/lodash-page/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    lodashSignature: file(absolutePath: { regex: "/lodash-signature/" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    amazon: file(absolutePath: { regex: "/amazon-nav/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    alexa: file(absolutePath: { regex: "/alexa/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
