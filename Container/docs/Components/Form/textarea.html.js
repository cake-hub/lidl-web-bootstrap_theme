import React from "react";
import { pseudoRandomHashGenerator } from "../../../helper";

const TextareaLabelSub = ({labelSub}) => (
    labelSub?
        <span className="font-weight-normal">{` ${labelSub}`}</span>
        : null
);

const Textarea = ( { id=pseudoRandomHashGenerator (),
                    type="text",
                    children,
                    c_labelClassName="",
                    c_labelText="Label for Text area",
                    c_labelSub=false,
                    className="",
                    ...props
                } ) => (
    <div>
        <label htmlFor={id} className={"input-label " + c_labelClassName}>
            { c_labelText }
            <TextareaLabelSub labelSub={c_labelSub}/>
        </label>
        <div className="input-group">
            <textarea className={ "form-control " + className } id={id} type={type} {...props}></textarea>
            { children }
        </div>
    </div>
);

export default Textarea;
