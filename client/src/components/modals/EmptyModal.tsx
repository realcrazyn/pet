import { Modal } from 'antd'
import React, { FC, useState } from 'react'

interface IProps {
  component: any
  title?: string
  footer?: boolean
  width?: string | number
  style?: any
  modalStyle?: any
  className?: string
  callback?: () => void
  destroy?: boolean
  maskClosable?: boolean
  disableLabel?: boolean
}

export const EmptyModal: React.FC<IProps> = ({
  component,
  title,
  callback,
  className,
  destroy = false,
  disableLabel = false,
  footer = true,
  maskClosable = true,
  modalStyle,
  style,
  width = '60%',
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
    callback && callback()
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
        }}
        onClick={!disableLabel ? showModal : () => {}}
      ></div>
      <Modal
        destroyOnClose={destroy}
        title={title ? title : ''}
        width={width}
        footer={footer}
        style={{ ...modalStyle }}
        className={className}
        maskClosable={maskClosable}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div style={{ ...style }}>{component}</div>
      </Modal>
    </>
  )
}
