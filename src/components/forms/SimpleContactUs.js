import React, { useRef, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg"

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const FormContainer = styled.div`
  ${tw`p-10 sm:p-12 md:p-16 bg-blue-900 text-gray-100 rounded-lg relative`}
  a {
    ${tw`underline`}
  }
  p {
    ${tw`mt-4`}
  }
  form {
    ${tw`mt-4`}
  }
  h2 {
    ${tw`text-3xl sm:text-4xl font-bold`}
  }
  input,textarea {
    ${tw`w-full bg-transparent text-gray-100 text-base font-medium tracking-wide border-b-2 py-2 text-gray-100 hocus:border-pink-400 focus:outline-none transition duration-200`};

    ::placeholder {
      ${tw`text-gray-500`}
    }
  }
`;

const TwoColumn = tw.div`flex flex-col sm:flex-row justify-between`;
const Column = tw.div`sm:w-5/12 flex flex-col`;
const InputContainer = tw.div`relative py-5 mt-6`;
const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm`;
const Input = tw.input``;
const TextArea = tw.textarea`h-24 sm:h-full resize-none`;
const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-gray-100 text-blue-900 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-blue-700 hocus:-translate-y-px hocus:shadow-xl`;

const SvgDotPattern1 = tw(SvgDotPatternIcon)`absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 -z-10 opacity-50 text-primary-500 fill-current w-24`

export default () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [result, setResult] = useState(null);
  let isSubmitting = useRef(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && email && message && !isSubmitting.current) {
      isSubmitting.current = true;
      fetch("https://formsubmit.co/ajax/5caa9f56309167841df3ff19df593824", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: 'Website Support',
          _replyto: email,
        })
      })
        .then(response => response.json())
        .then(data => setResult(data))
        .catch(error => {
          setResult({ success: false });
          console.log(error);
        });
    }
  };
  return (
    <Container>
      <Content id="contact">
        <FormContainer>
          <div tw="mx-auto max-w-4xl">
            <h2>Need help? Have questions? Contact our support.</h2>
            {result
              ? <p>
                {result.success
                  ? <span>Thank you for your message! We'll get back to you as soon as possible.</span>
                  : <span>Something went wrong, please try again later or email us at <a href='mailto:support@bobeargames.com'>support@bobeargames.com</a></span>
                }
              </p>
              : <form onSubmit={handleSubmit}>
                <TwoColumn>
                  <Column>
                    <InputContainer>
                      <Label htmlFor="name-input">Your name</Label>
                      <Input id="name-input" type="text" name="name" placeholder="Enter your name" value={name} onChange={event => setName(event.target.value)} />
                    </InputContainer>
                    <InputContainer>
                      <Label htmlFor="email-input">Your email address</Label>
                      <Input id="email-input" type="email" name="email" placeholder="Enter your email address" value={email} onChange={event => setEmail(event.target.value)} />
                    </InputContainer>
                  </Column>
                  <Column>
                    <InputContainer tw="flex-1">
                      <Label htmlFor="name-input">What can we help you with?</Label>
                      <TextArea id="message-input" name="message" placeholder="Describe your problem or question here" value={message} onChange={event => setMessage(event.target.value)} />
                    </InputContainer>
                  </Column>
                </TwoColumn>

                <SubmitButton type="submit" value="Submit">Submit</SubmitButton>
              </form>
            }
          </div>
          <SvgDotPattern1 />
        </FormContainer>
      </Content>
    </Container>
  );
};
