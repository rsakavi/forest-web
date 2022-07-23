import Button from '../components/Button'

export default{
    title: "Button",
    component: Button,
    argTypes: { handleClick: { action: "handleClick" } , logoType: "number"}
}

const Template = args => <Button {...args} />

export const Red = Template.bind({})
Red.args = {
    label: "Inversionista",
    size: "md",
    logoNumber: "1"
}

export const Green = Template.bind({})
Green.args = {
    label: "Desarrollador",
    size: "md",
    logoNumber: "2"
}

export const Small = Template.bind({})
Small.args = {
    label: "Comunidades",
    size: "md",
    logoNumber: "3"
}

export const Large = Template.bind({})
Large.args = {
    label: "Bonos",
    size: "md",
    logoNumber: "4"
}


export const LongLabel = Template.bind({})
LongLabel.args = {
    label: "Proyectos",
    size: "md",
    logoNumber: "5"
}