import React, {InputHTMLAttributes} from 'react';

import './styles.css';

interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement>{
    name: string;
    label: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest}) => {
    return (
        <div>
            <div className="textarea-block">
                <label htmlFor={name}>{label}</label>
                <textarea name={name} id={name} {...rest}/>
            </div>
        </div>
    );
}

export default Textarea;