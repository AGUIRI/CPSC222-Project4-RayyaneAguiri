import React from 'react'

/**
* @author
* @function AboutUS
**/

const AboutUS = (props) => {
    return(
        <div>AboutUS 
            <p>A blog (a truncation of "weblog")[1] is a discussion or informational website published on the World Wide Web consisting of discrete, often informal diary-style text entries (posts). Posts are typically displayed in reverse chronological order, so that the most recent post appears first, at the top of the web page. Until 2009, blogs were usually the work of a single individual,[citation needed] occasionally of a small group, and often covered a single subject or topic. In the 2010s, "multi-author blogs" (MABs) emerged, featuring the writing of multiple authors and sometimes professionally edited. MABs from newspapers, other media outlets, universities, think tanks, advocacy groups, and similar institutions account for an increasing quantity of blog traffic. The rise of Twitter and other "microblogging" systems helps integrate MABs and single-author blogs into the news media. Blog can also be used as a verb, meaning to maintain or add content to a blog.</p>
             <form>
                 <h1>Hello</h1>
                <p>Enter your firstname:</p>
                    <input type="text" />
                <p>Enter your lastname:</p>
                    <input type="text" />
                <p>Enter your phone:</p>
                    <input type="number" />
                <p>Enter your Password</p>
                    <input type="text" />
                <p><input type="button" class="button" value="Apply"/></p>
             </form>
        </div>
      )
    
     }
    
    
    

export default AboutUS