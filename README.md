# Nested Form Example via React Form hook

The project is demo of the handling of the nested level of form using [React-form-hook](https://www.react-hook-form.com/). The validation of fields within the form were handled by [Zod](https://zod.dev/).

## Form structure

The form contains two parts,

- Header
- body

### Header

Header contains the basic details about the title and date published.

### Body

Body contains actionable form. It has 3 levels. These are following,

- Group
  - Task
    - Material

## Form Submit

The form upon submit shows the formdata in console log.

## Form Inline Behaviour

Within the form, React-form-hook's FormProvider, useForm for handling the internal state management via underlining React's Context API and controlling the form.

## Acknowledgements

- [React Form Hook Advance doc](https://www.react-hook-form.com/advanced-usage/#ConnectForm)
- [React Form Hook Tutorial Video by Code Genix](https://youtu.be/7anLE_RoDwU?si=V3JPxh_yBnLqSft9)
- [Zod](https://github.com/react-hook-form/resolvers#zod)
- [Chat GPT](https://chatgpt.com/)
