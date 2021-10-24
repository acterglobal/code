import { Story, Meta } from '@storybook/react'

import {
  TextEditor as TextEditorComponent,
  TextEditorProps,
} from '@acter/components/util/text-editor'

export default {
  title: 'Organisms/Util/TextEditor',
  component: TextEditorComponent,
  args: {
    initialValue: null,
    width: 400,
    height: 300,
    handleInputChange: (data) => console.log(data),
  },
} as Meta

export const TextEditor: Story<TextEditorProps> = (args) => (
  <TextEditorComponent {...args} />
)
