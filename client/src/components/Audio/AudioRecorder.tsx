import RecorderControls from './components/RecorderControls'
import RecordingsList from './components/RecordingsList'
import useRecorder from './hooks/use-recorder'
import { UseRecorder } from './types/recorder'
import './AudioRecorder.css'

export default function AudioRecorder() {
  const { recorderState, ...handlers }: UseRecorder = useRecorder()
  const { audio } = recorderState

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <RecorderControls recorderState={recorderState} handlers={handlers} />
      <RecordingsList audio={audio} />
    </div>
  )
}
