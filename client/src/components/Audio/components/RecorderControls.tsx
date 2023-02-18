import { formatMinutes, formatSeconds } from '../utils/format-time'
import { RecorderControlsProps } from '../types/recorder'
import { Button } from 'antd'
import { AudioOutlined, BorderOutlined } from '@ant-design/icons'

export default function RecorderControls({
  recorderState,
  handlers,
}: RecorderControlsProps) {
  const { recordingMinutes, recordingSeconds, initRecording } = recorderState
  const { startRecording, saveRecording, cancelRecording } = handlers

  return (
    <div className="controls-container">
      {/* <div className="recorder-display">
        <div className="recording-time">
          {initRecording && <div className="recording-indicator"></div>}
          <span>{formatMinutes(recordingMinutes)}</span>
          <span>:</span>
          <span>{formatSeconds(recordingSeconds)}</span>
        </div>
        {initRecording && (
          <div className="cancel-button-container">
            <button
              className="cancel-button"
              title="Cancel recording"
              onClick={cancelRecording}
            >
              Cancel
            </button>
          </div>
        )}
      </div> */}
      <div className="start-button-container">
        {initRecording ? (
          <Button
            className="audiorecord__controls_btn-stop"
            title="Save recording"
            disabled={recordingSeconds === 0}
            onClick={saveRecording}
            icon={<div className="audiorecord__controls_btn-stop--icon" />}
          />
        ) : (
          <Button
            type="primary"
            className="audiorecord__controls_btn-record "
            title="Start recording"
            onClick={startRecording}
            icon={<AudioOutlined style={{ fontSize: 18 }} />}
          />
        )}
      </div>
    </div>
  )
}
