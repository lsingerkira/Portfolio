import React from "react";
import UsesSection from "../../components/UsesSection/UsesSection";
import Profile from "../../components/Profile/Profile";

export const metadata = {

  title: 'Portfolio - Uses',
  description: 'The uses page of my portfolio.',
}
const items = [
  {
    groupName: 'Workstation',
    items: [
      {
        title: '15” Lenovo ThinkPad, Intel Core, 64GB RAM (2021)',
        description:
          'I was using a Core i5-based laptop prior to this and the difference is night and day. I’ve never heard the fans turn on a single time, even under the incredibly heavy loads I put it through with our various data analysis and software development tasks.',
      },
      {
        title: 'Dell UltraSharp U2717D',
        description:
          'I have two of these monitors and they’re great. I’ve had them for years and they’ve been rock solid.',
      },
      {
        title: 'Keychron K2',
        description:
          'I’ve been using this keyboard for a few years now and I love it. It’s wireless, has a great feel, and the battery lasts forever.',
      },
      {
        title: 'Logitech MX Master 3',
        description:
          'I’ve been using this mouse for a few years now and it’s great. It’s wireless, has a great feel, and the battery lasts forever.',
      },
      {
        title: 'Audio-Technica ATH-M50x',
        description:
          'I’ve been using these headphones for a few years now and they’re great. They’re comfortable, sound good, and are built like a tank.',
      },
      {
        title: 'Rain Design mStand',
        description:
          'I’ve been using this stand for my laptop for a few years now and it’s great. It’s sturdy, looks good, and keeps my laptop cool.',
      },
    ],
  },
  {
    groupName: 'Development',
    items: [
      {
        title: 'Visual Studio Code',
        description:
          'I use VS Code for all of my software development work. It’s fast, has great extensions, and is highly customizable.',
      },
      {
        title: 'iTerm2 + Oh My Zsh',
        description:
          'I use iTerm2 as my terminal and Oh My Zsh as my shell. It’s a great combination. I use the Agnoster theme with the Fira Code font.',
      },
    ],
  },
  {
    groupName: 'Data Analysis',
    items: [
      {
        title: 'Jupyter Notebook',
        description:
          'I use Jupyter Notebook for interactive computing and data analysis. It’s versatile, supports multiple programming languages, and is widely used in the data science community.',
      },
      {
        title: 'Python Libraries (Pandas, NumPy, Matplotlib, Seaborn)',
        description:
          'I rely on Python libraries such as Pandas, NumPy, Matplotlib, and Seaborn for data manipulation, analysis, and visualization in my data analysis projects.',
      },
    ],
  },
  {
    groupName: 'Productivity',
    items: [
      {
        title: 'Notion',
        description:
          'I use Notion for all of my note-taking, project management, and collaboration needs. It’s versatile, highly customizable, and helps me stay organized.',
      },
      {
        title: 'Alfred',
        description:
          'I use Alfred for all of my productivity needs. It’s fast, has great features, and is highly customizable.',
      },
    ],
  },
];


export default function Uses() {
  return (
    <div>
    <Profile
        title="My Equipment"
        content="As a Software Engineer, my equipment typically consists of the following:"
      />
      <UsesSection items={items} />
    </div>
  );
}
