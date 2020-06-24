import React, { createContext, Component } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isHomepage: true,
    light: {
      hbg: "#fff",
      fbg: "#fff",
      text_p: "#888888",
      text_h: "#232425",
      logo: "#17b2ac",
      textcolornav__left: "#888888",
      textcolornav__right: "#888888",
      accountDropdown: "#fff",
      Account_dropdown__li__hover: "f3f3f3",
      bgslider:
        "linear-gradient(rgba(255, 255, 255, 0),rgba(255, 255, 255, 0.527),rgba(255, 255, 255, 0.884)",
    },
    dark: {
      hbg: "#35393f",
      fbg: "#35393f",
      text_p: "#d8d9da",
      text_h: "#fff",
      logo: "#17b2ac",
      textcolornav__left: "#888888",
      textcolornav__right: "#f9c34e",
      accountDropdown: "#292d34",
      Account_dropdown__li__hover: "#888888",
      bgslider: "linear-gradient(rgba(255, 255, 255, 0), #35393f)",
    },
  };
  toggleTheme = (value) => {
    this.setState({
      isHomepage: value,
    });
  };
  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
