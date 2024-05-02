import detectBrowserLanguage from 'detect-browser-language';

const ComponentLocation = () => {
  
    return (
        <>
            {detectBrowserLanguage()}
        </>);
};

export default ComponentLocation;
