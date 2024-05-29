import { View, ViewProps, YStack, YStackProps, createStyledContext, styled } from 'tamagui'

type CustomProps = {
  blue: boolean
}

const MyComponentContext = createStyledContext<CustomProps>({
  blue: false,
})

const BaseMyComponent = View.styleable<YStackProps & CustomProps>((props, ref) => {
  return <YStack ref={ref} {...props} />
})

export const MyComponent = styled(BaseMyComponent, {
  name: 'MyComponent',
  context: MyComponentContext,

  backgroundColor: 'red',

  variants: {
    blue: {
      true: {
        backgroundColor: 'blue',
      },
      false: {},
    },
    foo: {
      bar: (value, { props }) => {
        if (props.blue === true) {
          return {
            padding: 10,
          }
        }

        return {
          padding: 20,
        }
      },
    },
  } as const,
})
