// import { ThemeState } from 'styles/theme/slice/types';
// import { MediaTemplateDesignState } from 'app/modules/Dashboard/containers/MediaTemplate/containers/Design/slice/types';
// import { LoginState } from 'app/modules/Login/slice/types';
// import { LayoutState } from 'app/modules/slice/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
  Properties are optional because they are injected when the components are mounted sometime in your application's life. 
  So, not available always
*/
export interface RootState {
  // theme?: ThemeState;
  // mediaTemplateDesign?: MediaTemplateDesignState;
  // login?: LoginState;
  // layout?: LayoutState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
