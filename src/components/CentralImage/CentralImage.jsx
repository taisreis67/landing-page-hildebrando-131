import React, { useContext } from "react"
import Img from "gatsby-image"
import { Box, Paragraph, ResponsiveContext } from 'grommet'

const CentralImage = ({ images, background }) => {
  const size = useContext(ResponsiveContext);
  const { small, medium, description } = images;
  return (
    <Box pad={{ vertical: "large"}} background={background}>
      <Box width="xlarge" margin="auto" pad="medium">
        <Img
          fluid={size !== 'small' ? medium.fluid.childImageSharp.fluid : small.fluid.childImageSharp.fluid}
          title={description}
          alt={description}
        />

        <Paragraph textAlign="center" fill={true} size="small"  margin={{ vertical: "large"}}>
          A incorporação imobiliária do empreendimento foi registrado em 11/09/2020 sob a denominação "HILDEBRANDO-131", 
          conforme R.01 da matrícula nº 142.177 do Segundo Oficial de Registro de Imoveis de Osasco/SP. 
          Apesar de todo cuidado na obtenção das informações contidas neste folheto elas não devem ser consideradas 
          como parte integrantes de qualquer contrato. As ilustrações, artes, fotos, mobiliário e peças de decoração 
          dos materiais de divulgação têm caráter exclusivamente promocional por tratar-se de bem a ser construído 
          sendo que as condições de comercialização, projetos e especificações são aquelas dos contratos e memoriais 
          a serem firmados com os adquirentes. Creci 34412-J. Impresso em setembro de 2020. 
          *Preço sugerido para pesquisa de mercado.
        </Paragraph>
      </Box>
    </Box>
  )
}

export default CentralImage

