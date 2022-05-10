import {Story} from '@storybook/vue3';
import Login from './Login.vue';
import Auth from './Auth.vue';

export default {
  title: 'Pages/Login',
  component: Login,
  argTypes: {},
  args: {},
};

const Template: Story<{}> = (args) => ({
  components: {Login, Auth},
  setup() {
    return {args};
  },
  template: `
    <Auth>
      <Login/>
    </Auth>
  `,
});

export const Default = Template.bind({});
Default.args = {};
Default.storyName = 'Login';