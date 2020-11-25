import React from 'react'
import { useParams } from 'react-router-dom'

// style
import UIContainer from 'components/UI/Container'

//Componentes
import PromotionForm from 'components/Promotion/Form'

const PagesPromotionForm = () => {

    const { id } = useParams();



    return(
        <UIContainer>
            <PromotionForm id={id ? Number.parseInt(id, 10) : null}/>
        </UIContainer>
    )
}

export default PagesPromotionForm;