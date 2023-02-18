import { useState, useEffect } from 'react'
import { deleteAudio } from '../handlers/recordings-list'
import { Audio } from '../types/recorder'

export default function useRecordingsList(audio: string | null) {
  const [recordings, setRecordings] = useState<Audio[]>([])

  useEffect(() => {
    if (audio)
      setRecordings((prevState: Audio[]) => {
        // return [...prevState, { key: Date.now().toString(), audio }]
        return [{ key: Date.now().toString(), audio }]
      })
  }, [audio])

  return {
    recordings,
    deleteAudio: (audioKey: string) => deleteAudio(audioKey, setRecordings),
  }
}
