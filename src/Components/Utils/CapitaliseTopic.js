const capitaliseTopic = (topic) => {
    
    const str = topic;
    const capitalised = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalised
    
    }
     
    export default capitaliseTopic;