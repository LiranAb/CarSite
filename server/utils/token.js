import jwt from 'jsonwebtoken';
import config from '../config/index.js';
import { createLogger } from './logger.js';

const logger = createLogger('TOKEN-UTIL');

export const createToken = async (payload, jwtExpiry ) => {
    try {
        logger.info('Creating new JWT token');
        if (!config.jwtSecret) throw new Error('Missing JWT secret');
        const token =  jwt.sign(payload, config.jwtSecret, { expiresIn: config.jwtExpiry });
        logger.debug(`Token created successfully with expiry `);
        return token;
    } catch (error) {
        logger.error(`Error creating token: ${error.message}`);
        throw error;
    }
}

export const verifyToken = async(token) => {
    try {
        logger.info('Verifying JWT token');
        const decoded = await jwt.verify(token, config.jwtSecret);
        logger.debug('Token verified successfully');
        return decoded;
    } catch (error) {
        logger.error(`Error verifying token: ${error.message}`);
        throw error;
    }
}