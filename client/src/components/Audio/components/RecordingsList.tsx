import useRecordingsList from '../hooks/use-recordings-list'
import { RecordingsListProps } from '../types/recorder'
import { DeleteOutlined } from '@ant-design/icons'
import { Button } from 'antd'

export default function RecordingsList({ audio }: RecordingsListProps) {
  const { recordings, deleteAudio } = useRecordingsList(audio)

  return (
    <>
      {recordings.length > 0 ? (
        <>
          <div className="audiorecord__list">
            {recordings.map((record) => (
              <div className="audiorecord__list_record" key={record.key}>
                <audio
                  className="audiorecord__list_record-audio"
                  controls
                  src={record.audio}
                />

                <Button
                  icon={<DeleteOutlined style={{ color: 'red' }} />}
                  title="Удалить запись"
                  onClick={() => deleteAudio(record.key)}
                  className="audiorecord__list_record-delete"
                />
              </div>
            ))}
          </div>
        </>
      ) : null}
    </>
  )
}
