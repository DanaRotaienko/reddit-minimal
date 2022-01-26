import { App } from "../src/app/App";

expect(App.find(<Posts />)).toExist();
expect(App.find(<Comments />)).toExist();
expect(App.find(<Subreddits />)).toExist();