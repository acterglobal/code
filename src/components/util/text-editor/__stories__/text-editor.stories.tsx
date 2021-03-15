import { Story, Meta } from '@storybook/react'

import { TextEditor as TextEditorComponent } from 'src/components/util/text-editor'

export default {
  title: 'util/TextEditor',
  component: TextEditorComponent,
} as Meta

export const TextEditor: Story = () => <TextEditorComponent />
