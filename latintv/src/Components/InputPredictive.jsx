import  React, { useState, useEffect } from 'react'
import ReactAutocomplete from 'react-autocomplete'

export default function InputPredictive(props) {
    const [ value, setValue ] = useState('');
    const { items } = props;
    const { pushValue } = props;
    useEffect(() => {
        pushValue(value);     
    }, [value])

    return (
        <ReactAutocomplete
          className='loginSelect'
          items={items}
          shouldItemRender={(item, val) => item.label.toLowerCase().indexOf(val.toLowerCase()) > -1}
          getItemValue={item => item.label}
          renderItem={(item, highlighted) =>
            <div
              key={item.id}
              style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
            >
              {item.label}
            </div>
          }
          value={value}
          onChange={e => {
              setValue( e.target.value );
            }}
          onSelect={value => {
              setValue(value)
            }}
          name =""
        />
      )
}