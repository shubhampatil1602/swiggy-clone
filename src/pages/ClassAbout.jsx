import { Component } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { AboutShimmer } from '../components/AboutShimmer';

class ClassAbout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: '',
    };
  }
  async componentDidMount() {
    try {
      const res = await fetch('https://api.github.com/users/shubhampatil1602');
      const r = await res.json();
      this.setState({
        data: r,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return !this.state.data ? (
      <AboutShimmer />
    ) : (
      <div className='py-12'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col items-center justify-center'>
            <div className='mb-8'>
              <img
                src={this.state.data.avatar_url}
                alt={this.state.data.name}
                className='rounded-full h-40 w-40 object-cover shadow-xl'
              />
            </div>
            <div className='text-center'>
              <p className='text-lg text-gray-600'>
                {this.state.data.location} 🇮🇳
              </p>
              <h1 className='text-3xl p-3 font-bold text-gray-800'>
                {this.state.data.name}
              </h1>
              <a
                href='https://github.com/shubhampatil1602'
                target='_blank'
                className='text-lg text-gray-600 flex justify-center items-center p-1 gap-2'
              >
                <FaGithub className='text-black' /> @{this.state.data.login}
              </a>
              {this.state.data.twitter_username && (
                <a
                  href='https://twitter.com/shubhamsp1602'
                  target='_blank'
                  className='text-lg text-gray-600 flex justify-center items-center p-1 gap-2'
                >
                  <FaTwitter className='text-blue-400' /> @
                  {this.state.data.twitter_username}
                </a>
              )}
              <a
                href='https://www.linkedin.com/in/shubhmpatil/'
                className='
              text-lg
              text-gray-600
              flex
              justify-center
              items-center
              p-1
              gap-2'
              >
                <FaLinkedin className='text-blue-600' /> @shubhmpatil
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ClassAbout;
